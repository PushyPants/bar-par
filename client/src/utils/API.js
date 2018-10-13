import axios from "axios";

export default {
  getAvailability: function() {
    return axios.get("/api/avail");
  },
  getAvailabilityForId: function(id) {
    return axios.get(`/api/avail/${id}`);
  },
  addAvailability: function(data) {
    return axios.post(`/api/avail`, data);
  },
  updateAvailability: function(id, data) {
    return axios.put(`/api/avail/${id}`, data);
  },
  deleteAvailability: function(id) {
    return axios.delete(`/api/avail/${id}`);
  },
  getEmployee: function() {
    return axios.get(`/api/employee`);
  },
  getOneEmployee: function(id) {
    return axios.get(`/api/employee/${id}`);
  },
  addEmployee: function(data) {
    return axios.post(`/api/employee/`, data);
  },
  updateEmployee: function(id, data) {
    return axios.put(`/api/employee/${id}`, data);
  },
  updateEmployeeAvail: function(id, data) {
    return axios.put(`/api/employee/del/${id}`, data);
  },
  deleteEmployee: function(id) {
    return axios.delete(`/api/employee/${id}`);
  },
  getShift: function() {
    return axios.get("/api/shift");
  },
  createShift: function(data) {
    return axios.post("/api/shift", data);
  },
  updateShift: function(id, data) {
    return axios.put(`/api/shift/${id}`, data);
  },
  deleteShift: function(id) {
    return axios.delete(`/api/shift/${id}`);
  },
  getLocations: function(){
    return axios.get('/api/locations')
  },
  updateLocation: function(id){
    return axios.put(`${id}`)
  },
  itemLookup: function(id){
    return axios.put(`/api/itemlookup/${id}`)
  },
  getProducts: function(){
    return axios.get(`/api/products`);
  },
  getSingleStation: function(id) {
    return axios.get(`/api/getsinglestation/${id}`)
  }
};
