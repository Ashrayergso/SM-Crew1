import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getResources = () => {
  return axios.get(`${BASE_URL}/resources/`);
};

export const getShipDetails = () => {
  return axios.get(`${BASE_URL}/shipdetails/`);
};

export const getSchedule = () => {
  return axios.get(`${BASE_URL}/schedule/`);
};

export const getNextAvailability = (resourceId) => {
  return axios.get(`${BASE_URL}/nextavailability/${resourceId}`);
};

export const getShipsWithNoFutureAssignment = () => {
  return axios.get(`${BASE_URL}/shipsnofutureassignment/`);
};

export const getMainMatching = () => {
  return axios.get(`${BASE_URL}/mainmatching/`);
};