import axios from 'axios';
import jwtService from '@/util/jwtService';

const API_URL = 'http://localhost:3000';
const api = axios.create({ baseURL: API_URL });

function setAuthorization() {
	api.defaults.headers.common.Authorization = `Bearer ${jwtService.getToken()}`;
};

export function loginService(credentials) {
	return api.post('/auth', credentials);
};

export function registerService(credentials) {
	return api.post('/register', credentials);
};

export function getCustomers() {
	return api.get('/customers');
};

export function addCustomer(payload) {
	setAuthorization();
	return api.post('/customers', payload);
};

export function updateCustomer(id, payload) {
	setAuthorization();
	return api.put(`/customers/${id}`, payload);
};

export function deleteCustomer(id) {
	setAuthorization();
	return api.delete(`/customers/${id}`);
};
