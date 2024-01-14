import axios from 'axios';

class StudentService{

    createRecord(student) {
        return axios.post("http://localhost:8080/api/v1/employees", student);
    }
    getRecords() {
        return axios.get("http://localhost:8080/api/v1/employees");
    }

    deleteRecord(recordId) {
        return axios.delete("http://localhost:8080/api/v1/employees" + '/' + recordId);
    }

    getRecordById(recordId) {
        return axios.get("http://localhost:8080/api/v1/employees" + '/' + recordId);
    }

    updateRecord(record, recordId) {
        return axios.put("http://localhost:8080/api/v1/employees" + '/' + recordId, record);
    }
}
export default new StudentService();

