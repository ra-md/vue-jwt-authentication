import axios from 'axios';
import jwtService from '@/util/jwtService';

const API_URL = 'http://localhost:3000';
const api = axios.create({ baseURL: API_URL });

function setHeader() {
	api.default.headers.common.Authorization = `Token ${jwtService.getToken()}`;
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

export function getCustomerById(id) {
	return api.get(`/customers/${id}`);
};

export function createCustomer(payload) {
	setHeader();
	api.post();
};

// export function updateCustomer(id) {
// 	setHeader();
// 	api.put()
// };

// export function deleteCustomer(id) {
// 	setHeader();
// 	api.delete();
// };
