import axios from 'axios';
import jwtService from '@/utils/jwtService';
import router from '@/router';
import store from '@/store';
import { PURGE_AUTH, SET_ERROR } from '@/store/mutations.type';

const API_URL = 'http://localhost:3000';
const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(response => {
	return Promise.resolve(response);
}, error => {
	if (error.response?.status === 401 && router.app.$route.path !== '/login') {
		store.commit(`authModule/${PURGE_AUTH}`);
		store.commit(`authModule/${SET_ERROR}`, 'token expired');
		router.push('/login');
	}
	return Promise.reject(error);
});

function setAuthorization() {
	api.defaults.headers.common.Authorization = `Bearer ${jwtService.getToken()}`;
};

function loginService(credentials) {
	return api.post('/auth', credentials);
};

function registerService(credentials) {
	return api.post('/register', credentials);
};

function getCustomers() {
	return api.get('/customers');
};

function addCustomer(payload) {
	setAuthorization();
	return api.post('/customers', payload);
};

function updateCustomer(id, payload) {
	setAuthorization();
	return api.put(`/customers/${id}`, payload);
};

function deleteCustomer(id) {
	setAuthorization();
	return api.delete(`/customers/${id}`);
};

export default { 
	loginService, 
	registerService, 
	getCustomers, 
	addCustomer, 
	updateCustomer, 
	deleteCustomer
};
