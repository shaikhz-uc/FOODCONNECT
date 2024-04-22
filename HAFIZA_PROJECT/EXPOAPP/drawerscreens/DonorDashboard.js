// DonorDashboard.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const DonorDashboard = () => {
  const [foodItems, setFoodItems] = useState([
    { id: '1', name: 'Apples', quantity: 10 },
    { id: '2', name: 'Bread', quantity: 5 },
    { id: '3', name: 'Rice', quantity: 3 },
  ]);

  const [contributionHistory, setContributionHistory] = useState([
    { id: '1', date: '2022-04-28', items: ['Apples', 'Bread'], quantity: 15 },
    { id: '2', date: '2022-04-27', items: ['Rice'], quantity: 3 },
  ]);

  const [notifications, setNotifications] = useState([
    { id: '1', message: 'Your donation was received.', date: '2022-04-25' },
    { id: '2', message: 'New request for donation.', date: '2022-04-26' },
  ]);

  const [donations, setDonations] = useState([
    { id: '1', itemName: '1. Apples', quantity: 5, status: 'Pending' },
    { id: '2', itemName: '2. Bread', quantity: 2, status: 'Completed' },
  ]);

  const renderContributionItem = ({ item }) => (
    <View style={styles.contributionItem}>
      <Text>Date: {item.date}</Text>
      <Text>Items: {item.items.join(', ')}</Text>
      <Text>Quantity: {item.quantity}</Text>
    </View>
  );

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNotificationClick(item)}>
      <View style={styles.notificationItem}>
        <Text>{item.message}</Text>
        <Text>Date: {item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleNotificationClick = (notification) => {
    // Handle click event for notification
    console.log('Notification clicked:', notification);
  };

  const renderDonationItem = ({ item }) => (
    <View style={styles.donationItem}>
      <Text>{item.itemName}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  const handleTrackDonation = (id) => {
    // Handle tracking of donation with id
    console.log('Track donation:', id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Donor Dashboard</Text>
      <Button title="Add Food Item" onPress={() => console.log('Add food item')} />
      <FlatList
        data={foodItems}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.foodList}
      />
      <View style={styles.contributionHistory}>
      <Button title="Contribution History" onPress={() => console.log('Add food item')} />
        <FlatList
          data={contributionHistory}
          renderItem={renderContributionItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.notificationSection}>
      <Button title="Notification History" onPress={() => console.log('Add food item')} />
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.donationSection}>
      <Button title="Trcak Donations" onPress={() => console.log('Add food item')} />
        <FlatList
          data={donations}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleTrackDonation(item.id)}>
              {renderDonationItem({ item })}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  foodList: {
    marginBottom: 20,
  },
  foodItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  contributionHistory: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  contributionItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  notification: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  tracking: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  notificationSection: {
    marginTop: 20,
  },
  notificationItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default DonorDashboard;
