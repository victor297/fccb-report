const Header = () => (
  <View style={styles.CreditAccountSummaryHeader} fixed>
    <Image
      src="https://firstcentralcreditbureau.com/wp-content/uploads/2019/07/first-central-logo.png"
      style={styles.CreditAccountSummaryLogo}
    />
    <View style={styles.CreditAccountSummaryHeaderRight}>
      <Text style={styles.CreditAccountSummaryHeaderTitle}>
        Detailed Credit Profile Report
      </Text>
      <Text style={styles.CreditAccountSummaryHeaderAddress}>
        No 37/17A Raymond Njoku Street, Ikoyi, Lagos, Nigeria{'\n'}
        Tel No: +234 (1) 453 9060, +234 (1) 453 0831{'\n'}
        Website: www.firstcentralcreditbureau.com{'\n'}
        Email : info@firstcentralcreditbureau.com
      </Text>
    </View>
  </View>
);
