import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import IP from '../../component/IP';
import ImageIP from '../../component/ImageIP';
import {colors} from '../../color/Theme';

const AttendanceMainPage = ({uid}) => {
  const [userlist, setUserList] = useState([]);
  const [userlistbyrole, setUserListByRole] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchcuser(uid);
    fetchcuserbyrole();
  }, []);

  const fetchcuser = async id => {
    try {
      const response = await fetch(
        `http://${IP}/HRM_System/api/User/NewUserGet?id=${id}`,
      );
      const data = await response.json();
      if (response.status === 200) {
        if (Array.isArray(data)) {
          setUserList(data);
        } else {
          setUserList([data]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchcuserbyrole = async () => {
    try {
      const response = await fetch(
        `http://${IP}/HRM_System/api/User/UserroleGet`,
      );
      const data = await response.json();
      if (response.status === 200) {
        if (Array.isArray(data)) {
          setUserListByRole(data);
        } else {
          setUserListByRole([data]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = value => {
    setSearchQuery(value);
  };

  const renderEmployeeCard = ({item}) => {
    if (
      searchQuery !== '' &&
      !(
        (item.fname?.toLowerCase() ?? '') +
        ' ' +
        (item.lname?.toLowerCase() ?? '')
      ).includes(searchQuery.toLowerCase())
    ) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          // Handle card tap
        }}
        style={styles.card}>
        <View style={styles.employeeContainer}>
          {item.image ? (
            <Image style={styles.employeeImage} source={{uri: `${ImageIP}`}} />
          ) : (
            <View style={styles.emptyImage}>
              <Text style={styles.emptyImageText}>No Image</Text>
            </View>
          )}
          <Text style={styles.employeeName}>
            {item.fname} {item.lname}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Employees</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Employee name"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.listContainer}>
        {userlistbyrole.length > 0 ? (
          <FlatList
            data={userlistbyrole}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderEmployeeCard}
            numColumns={2}
          />
        ) : (
          <ActivityIndicator style={styles.loadingIndicator} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: colors.dark,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  searchContainer: {
    padding: 12,
    backgroundColor: 'white',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    elevation: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  employeeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  employeeImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  emptyImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImageText: {
    fontSize: 16,
    color: 'white',
  },
  employeeName: {
    fontSize: 15,
    color: 'black',
  },
  loadingIndicator: {
    marginTop: 50,
  },
});

export default AttendanceMainPage;
