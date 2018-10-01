import axios from "axios";

export default {
  getAvailability: function(){
    return axios.get('/api/avail');
  },
  getAvailabilityForId: function(id){
    return axios.get(`/api/avail/${id}`);
  },
  addAvailability: function(data){
    return axios.post(`/api/avail`, data)
  },
  updateAvailability: function(id){
    return axios.put(`/api/avail/${id}`)
  },
  deleteAvailability: function (id) {
    return axios.delete(`/api/avail/${id}`)
  },
  getEmployee: function () {
    return axios.get(`/api/employee`)
  },
  addEmployee: function (data) {
    return axios.post(`/api/employee/`, data)
  },
  updateEmployee: function (id) {
    return axios.put(`/api/employee/${id}`)
  },
  deleteEmployee: function (id) {
    return axios.delete(`/api/employee/${id}`)
  },
  getShift: function(){
    return axios.get('/api/shift')
  },
  createShift: function(){
    return axios.post('/api/shift')
  },
  updateShift: function(id){
    return axios.put(`/api/shift/${id}`)
  },
  deleteShift: function(id){
    return axios.delete(`/api/shift/${id}`)
  }
};