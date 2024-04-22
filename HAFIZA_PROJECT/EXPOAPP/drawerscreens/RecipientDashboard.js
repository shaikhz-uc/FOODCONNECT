// RecipientDashboard.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const RecipientDashboard = () => {
  const [donations, setDonations] = useState([
    { id: '1', name: 'Milk', quantity: 2 },
    { id: '2', name: 'Canned Goods', quantity: 5 },
  ]);

  

  const renderDonationItem = ({ item }) => (
    <View style={styles.donationItem}>
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => requestDonation(item.id)}>
        <Text style={styles.requestButton}>Request Donation</Text>
      </TouchableOpacity>
    </View>
  );

  const requestDonation = (id) => {
    // Placeholder logic to request donation
    console.log(`Requesting donation with id ${id}`);
  };

  const editDonation = (id) => {
    // Placeholder logic to edit donation
    console.log(`Editing donation with id ${id}`);
  };

  const deleteDonation = (id) => {
    // Placeholder logic to delete donation
    console.log(`Deleting donation with id ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipient Dashboard</Text>
      <FlatList
        data={donations}
        renderItem={renderDonationItem}
        keyExtractor={(item) => item.id}
        style={styles.donationList}
      />
      <View style={styles.manageDonations}>
        <Text>Manage Donations:</Text>
        <Button title="Edit Donation" onPress={() => editDonation('1')} />
        <Button title="Delete Donation" onPress={() => deleteDonation('1')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  donationList: {
    marginBottom: 20,
  },
  donationItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  requestButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  manageDonations: {
    borderWidth: 1,
    padding: 10,
  },
});

export default RecipientDashboard;
