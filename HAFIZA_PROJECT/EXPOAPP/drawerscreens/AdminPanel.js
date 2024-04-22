import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const AdminPanel = () => {
  const [donorAccounts, setDonorAccounts] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const [recipientAccounts, setRecipientAccounts] = useState([
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
    { id: '2', name: 'Bob Brown', email: 'bob@example.com' },
  ]);

  const handleDisputes = () => {
    // Placeholder logic for handling disputes
    alert('Handling disputes');
  };

  const maintainImpactMeasures = () => {
    // Placeholder logic for maintaining impact measures
    alert('Impact measures are being maintained.');
  };
  
  
  const managePlatformInfrastructure = () => {
    // Placeholder logic for managing platform infrastructure
    alert('Platform infrastructure is being managed.');
  };
  

  const renderDonorAccount = ({ item }) => (
    <View style={styles.accountItem}>
      <Text>{item.name}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  const renderRecipientAccount = ({ item }) => (
    <View style={styles.accountItem}>
      <Text>{item.name}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin Panel</Text>
      <View style={styles.accountSection}>
        <Text>Donor Accounts:</Text>
        <FlatList
          data={donorAccounts}
          renderItem={renderDonorAccount}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.accountSection}>
        <Text>Recipient Accounts:</Text>
        <FlatList
          data={recipientAccounts}
          renderItem={renderRecipientAccount}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.manageSection}>
        <Button title="Handle Disputes/Problems" onPress={handleDisputes} />
        <Button title="Maintain Impact Measures" onPress={maintainImpactMeasures} />
        <Button title="Manage Platform Infrastructure" onPress={managePlatformInfrastructure} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    fontFamily: 'Times New Roman',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountSection: {
    marginBottom: 20,
  },
  accountItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  manageSection: {
    marginTop: 20,
  },
});

export default AdminPanel;

