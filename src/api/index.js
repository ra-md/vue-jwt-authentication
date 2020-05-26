import axios from 'axios';
import jwtService from '@/util/jwtService';

const API_URL = 'http://localhost:3000';
const api = axios.create({ baseURL: API_URL });

const headers = {
	Authorization: `Bearer ${jwtService.getToken()}`
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
	return api.post('/customers', payload, {
		headers
	});
};

export function updateCustomer(id, payload) {
	return api.put(`/customers/${id}`, payload, {
		headers
	});
};

export function deleteCustomer(id) {
	return api.delete(`/customers/${id}`, {
		headers
	});
};
