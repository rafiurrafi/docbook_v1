import React, { Component } from "react";
import AppointmentHint from "./appointmentHint";
import formatYear, { formatBookingDate } from "./utils/formatYear";
import "./styles/appointment.css";
class Appointments extends Component {
  state = {
    accounts: {
      patientName: "",
      department: "",
      doctorId: "",
      patientEmail: "",
      patientPhone: "",
      bookingDate: "",
      patientComment: "",
    },
    showMessage: "",
  };
  handleChange = (e) => {
    const accounts = { ...this.state.accounts };
    accounts[e.target.name] = e.target.value;
    this.setState({ accounts });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const creationDate = formatYear(new Date());

    const appointment = { ...this.state.accounts, creationDate };
    appointment.bookingDate = formatBookingDate(appointment.bookingDate);
    this.setState({ showMessage: "Thanks for your appointments" });
    this.props.onAddAppointment(appointment);
  };
  render() {
    const {
      patientName,
      department,
      doctorId,
      patientEmail,
      patientPhone,
      bookingDate,
      patientComment,
    } = this.state.accounts;

    return (
      <div className="Appointments" id="appointment">
        <h2>Appointments</h2>
        <div className="container">
          <AppointmentHint />
          <div className="Appoinments-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Patient Name</label> <br />
                <input
                  type="text"
                  placeholder="Patient Name"
                  name="patientName"
                  value={patientName}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group form-50 form-mr">
                <label htmlFor="">Departments</label> <br />
                <select
                  name="department"
                  onChange={this.handleChange}
                  value={department}
                  id=""
                  required
                >
                  <option value="">Departments</option>
                  {this.props.departments.map((dept) => (
                    <option value={dept._id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group form-50">
                <label htmlFor="">Doctors</label> <br />
                <select
                  name="doctorId"
                  onChange={this.handleChange}
                  value={doctorId}
                  id=""
                  required
                >
                  <option value="">Doctors</option>
                  {this.props.doctors.map((doctor) => (
                    <option value={doctor._id}>{doctor.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group form-50 form-mr">
                <label htmlFor="">Patient Email</label> <br />
                <input
                  type="text"
                  placeholder="Patient Email"
                  name="patientEmail"
                  value={patientEmail}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group form-50">
                <label htmlFor="">Patient Phone</label> <br />
                <input
                  type="text"
                  placeholder="Patient Phone"
                  name="patientPhone"
                  value={patientPhone}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Booking Date</label> <br />
                <input
                  type="date"
                  placeholder="Patient Phone Number"
                  name="bookingDate"
                  value={bookingDate}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Comments</label> <br />
                <textarea
                  onChange={this.handleChange}
                  value={patientComment}
                  name="patientComment"
                  placeholder="Comments"
                  id=""
                  cols="20"
                  rows="3"
                  required
                ></textarea>
              </div>
              <p className="bg-success text-white">{this.state.showMessage}</p>
              <button className="btn btn-full">Book an Appointment</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
