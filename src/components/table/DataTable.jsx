import React, { useState } from "react";
import { Table, Input, Select, Checkbox, Modal, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import toast from "react-hot-toast";



const DataTable = ({ data, handleView }) => {
    const [filters, setFilters] = useState({});
    const [selectedRows, setSelectedRows] = useState([]);
    const { userInfo } = useSelector((state) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [latestSelectedId, setLatestSelectedId] = useState(null);


    const { Option } = Select;


    const extractAndRenameFields = (data) => {
        return data?.flatMap(entry =>
            entry.MatchedConsumer.map(consumer => ({
                'ConsumerID': consumer?.ConsumerID,
                EnquiryID: consumer?.EnquiryID,
                MatchingEngineID: consumer?.MatchingEngineID,
                'Confidence Rating': consumer?.MatchingRate,
                'FirstCentral Ref No': consumer?.Reference,
                Identifications: `${consumer?.IDNo || "-"},${consumer?.PassportNo || "-"},${consumer?.PencomIDno || "-"},${consumer?.VoterID || "-"},${consumer?.DriversLicenseNo || "-"}`.trim(),
                BirthDate: consumer?.BirthDate,
                'Telephone Number': consumer?.TelePhoneNumber,
                'Subject Details': `${consumer?.Surname || ""} ${consumer?.FirstName || ""} ${consumer?.OtherNames || ""}: ${consumer?.Address}`.trim()
            }))
        );
    };

    const modifiedData = extractAndRenameFields(data)
    console.log(extractAndRenameFields(data));
    const filterOptions = {
        number: [
            "Equals",
            "Doesn't equal",
            "Is less than",
            "Is less than or equal to",
            "Is greater than",
            "Is greater than or equal to",
        ],
        text: [
            "Begins with",
            "Contains",
            "Doesn't contain",
            "Ends with",
            "Equals",
            "Doesn't equal",
        ],
    };
    const handleFilterChange = (key, type, value) => {
        setFilters({ ...filters, [key]: { type, value } });
    };

    const handleRowSelection = (consumerID) => {
        setSelectedRows((prev) => {
            const newSelection = prev.includes(consumerID)
                ? prev.filter((id) => id !== consumerID)
                : [...prev, consumerID];
            return newSelection;
        });
    };
    const openModal = () => {
        if (selectedRows.length <= 1) {
            toast.error("Please select at least two row.");
            return;
        }
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleGenerate = () => {
        if (!latestSelectedId) {
            toast.error("No record selected.");
            return;
        }
    
        const record = modifiedData.find(item => item.ConsumerID === latestSelectedId);
        if (!record) {
            console.warn("Selected record not found.");
            return;
        }
    
        const payload = {
            DataTicket: userInfo?.DataTicket,
            SubscriberEnquiryEngineID: record.MatchingEngineID, // Matching engine ID of the selected one in modal  
            EnquiryID: record.EnquiryID, // Enquiry ID of the selected one in modal  
            ConsumerID: record.ConsumerID, // ID of the selected one in modal 
            consumerMergeList: selectedRows.join(",") // Selected rows list
        };

    
        console.log("Generated Payload:", payload);
        closeModal();
        handleView(payload)
    };
    

    const applyFilters = (data) => {
        return data?.filter((item) => {
            return Object.entries(filters).every(([key, { type, value }]) => {
                if (!value) return true;
                const itemValue = item[key]?.toString().toLowerCase();
                const filterValue = value.toLowerCase();

                if (key === "Confidence Rating") {
                    const numItemValue = Number(item[key]);
                    const numFilterValue = Number(value);
                    switch (type) {
                        case "Equals":
                            return numItemValue === numFilterValue;
                        case "Doesn't equal":
                            return numItemValue !== numFilterValue;
                        case "Is less than":
                            return numItemValue < numFilterValue;
                        case "Is less than or equal to":
                            return numItemValue <= numFilterValue;
                        case "Is greater than":
                            return numItemValue > numFilterValue;
                        case "Is greater than or equal to":
                            return numItemValue >= numFilterValue;
                        default:
                            return true;
                    }
                } else {
                    switch (type) {
                        case "Begins with":
                            return itemValue.startsWith(filterValue);
                        case "Contains":
                            return itemValue.includes(filterValue);
                        case "Doesn't contain":
                            return !itemValue.includes(filterValue);
                        case "Ends with":
                            return itemValue.endsWith(filterValue);
                        case "Equals":
                            return itemValue === filterValue;
                        case "Doesn't equal":
                            return itemValue !== filterValue;
                        default:
                            return true;
                    }
                }
            });
        });
    };

    const columns = [
        {
            title: <p className="text-xxs">Select</p>,
            dataIndex: "ConsumerID",
            key: "select",
            width: 40,
            render: (consumerID) => (
                <Checkbox
                    checked={selectedRows.includes(consumerID)}
                    onChange={() => handleRowSelection(consumerID)}
                    className="scale-75"
                />
            ),
        },
        ...[
            "Confidence Rating",
            "FirstCentral Ref No",
            "Identifications",
            "BirthDate",
            "Telephone Number",
            "Subject Details",
        ].map((key) => ({
            title: (
                <div className="space-y-0.5 flex flex-col">
                    <div className="text-xxs font-medium min-w-[120px]">{key}</div>
                    <Select
                        size="small"
                        className="w-full text-xxs border"
                        placeholder="Filter"
                        bordered={false}
                        onChange={(type) => handleFilterChange(key, type, filters[key]?.value || '')}
                        value={filters[key]?.type || undefined}
                    >
                        {(key === "MatchingEngineID" ? filterOptions.number : filterOptions.text).map((opt) => (
                            <Option key={opt} value={opt} className="text-xxs">
                                {opt}
                            </Option>
                        ))}
                    </Select>
                    {filters[key]?.type && (
                        <Input
                            size="small"
                            className="w-full text-xxs border border-gray-300 bg-white"
                            placeholder="Search"
                            onChange={(e) => handleFilterChange(key, filters[key]?.type || '', e.target.value)}
                            value={filters[key]?.value || ''}
                        />

                    )}
                </div>
            ),
            dataIndex: key,
            key,
            width: key === "Subject Details" ? 200 : 100,
            ellipsis: true,
            render: (text, record) => {
                if (key === "Confidence Rating") {
                    const color = text >= 90 ? "bg-green-500" : text >= 70 ? "bg-yellow-500" : "bg-red-500";
                    return (
                        <div className="relative w-full h-6 bg-gray-200 rounded">
                            <div
                                className={`h-full rounded ${color}`}
                                style={{ width: `${text}%` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-xxs font-medium">
                                {text}%
                            </div>
                        </div>
                    );
                }
                return <span className="text-xxs whitespace-nowrap">{text}</span>;
            },
        })),
        {
            title: <p className="text-xxs">View</p>,
            dataIndex: "ConsumerID",
            key: "view",
            width: 40,
            render: (_, record) => (
                <EyeOutlined
                    style={{ cursor: "pointer", color: "#1890ff" }}
                    onClick={() => {
                        handleView({
                            "DataTicket": userInfo?.DataTicket,
                            "SubscriberEnquiryEngineID": record.MatchingEngineID,
                            "EnquiryID": record.EnquiryID,
                            "ConsumerID": record.ConsumerID,
                            "consumerMergeList": record.ConsumerID
                        })
                        console.log({
                            "DataTicket": userInfo?.DataTicket,
                            "SubscriberEnquiryEngineID": record.MatchingEngineID,
                            "EnquiryID": record.EnquiryID,
                            "ConsumerID": record.ConsumerID,
                            "MatchingEngineID": record.ConsumerID
                        }
                        )
                    }}
                />
            ),
        },
    ];

    return (
        <div className="bg-white  rounded-lg shadow mt-8 p-1">
            <div className="flex text-xs items-center">
                <p className="flex items-center gap-1">Search Result <BiSearch /></p>
                <button onClick={openModal} className="ml-auto bg-primary text-white  px-2 py-1 rounded">Merge Selected</button>
            </div>
            <Table
                columns={columns}
                dataSource={applyFilters(modifiedData)}
                rowKey="ConsumerID"
                size="small"
                bordered
                pagination={{ pageSize: 10 }}
                scroll={{ x: 'max-content' }}
                className="[&_.ant-table-cell]:!p-1 [&_.ant-table-thead_.ant-table-cell]:!bg-gray-100"
            />

            <Modal open={isModalOpen} onCancel={closeModal} footer={null}>
                <p className="text-xxs mb-2">Please select the main subject for the Merge Report... </p>
                <Table
                    columns={[
                        {
                            title: <span className="text-xxs">Confidence Rating</span>,
                            dataIndex: "Confidence Rating",
                            className: "text-xs",
                            render: (text) => {
                                const color = text >= 90 ? "bg-green-500" : text >= 70 ? "bg-yellow-500" : "bg-red-500";
                                return (
                                    <div className="relative w-full h-4 bg-gray-200 rounded">
                                        <div
                                            className={`h-full rounded ${color}`}
                                            style={{ width: `${text}%` }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-xxs font-medium">
                                            {text}%
                                        </div>
                                    </div>
                                );

                            },
                        },
                        {
                            title: <span className="text-xxs">Subject Details</span>,
                            dataIndex: "Subject Details",
                            className: "text-xs",
                            render: (text) => <span className="text-xxs">{text}</span>,
                        },
                    ]}
                    dataSource={modifiedData?.filter((item) => selectedRows.includes(item.ConsumerID))}
                    rowKey="ConsumerID"
                    size="small"
                    pagination={false}
                    rowSelection={{
                        type: "radio",
                        onChange: (selectedRowKeys) => setLatestSelectedId(selectedRowKeys[0]),
                    }}
                    className="[&_.ant-table-cell]:!p-1 [&_.ant-table-thead_.ant-table-cell]:!bg-gray-100"

                />
                <div className="mt-4 text-right">
                    <Button onClick={handleGenerate} className="text-xs bg-primary text-white">
                        Generate
                    </Button>
                </div>
            </Modal>

            <div className="p-1 text-xxs border-t">
                <strong>Selected Consumer IDs:</strong> {selectedRows.join(", ")}
            </div>
        </div>
    );
};

export default DataTable;