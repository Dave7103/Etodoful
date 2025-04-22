// src/styles.js
import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
  },
  addTaskContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 15,
  },
  addTaskInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    color: '#222',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#7e57c2', // purple
  },
  filterButtonActive: {
    backgroundColor: '#ff9800', // orange
  },
  filterText: {
    color: '#fff',
    fontWeight: '500',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 8,
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
  },
  taskInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#fff',
    color: '#000',
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#f1f1f1',
    textAlign: 'center',
  },
  addTaskContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 15,
  },
  addTaskInput: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#7e57c2', // purple
  },
  filterButtonActive: {
    backgroundColor: '#ff9800', // orange
  },
  filterText: {
    color: '#fff',
    fontWeight: '500',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#1c1c1c',
    borderRadius: 6,
    marginBottom: 8,
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: '#eaeaea',
  },
  taskInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#2a2a2a',
    color: '#f1f1f1',
  },
});
