import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileTable extends Component {
  state = {};
  getDoctor = (doctors, doctorId) => {
    const doctor = doctors.find((doctor) => doctor._id == doctorId);
    return doctor;
  };
  render() {
    const { appointments, doctors } = this.props;
    return (
      <div className="Profile-right">
        <table className="Profile-table table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Appt Date</th>
              <th>Booking Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/img/01.jpg" alt="" />
                <div className="doc_data">
                  <h5>Name</h5>
                  <p>Department</p>
                </div>
              </td>
              <td>
                <p>14 Nov, 2019</p>
                <p>10 : 10 am</p>
              </td>
              <td>
                <p>12 Nov, 2019</p>
              </td>
              <td>$160</td>
              <td className="text-success">Confirm</td>
              <td>
                <Link to="/doctors/1" className="btn btn-single">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/img/06.jpg" alt="" />
                <div className="doc_data">
                  <h5>Name</h5>
                  <p>Department</p>
                </div>
              </td>
              <td>
                <p>14 Nov, 2019</p>
                <p>10 : 10 am</p>
              </td>
              <td>
                <p>12 Nov, 2019</p>
              </td>
              <td>$160</td>
              <td className="text-success">Confirm</td>
              <td>
                <Link to="/doctors/2" className="btn btn-single">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/img/07.jpg" alt="" />
                <div className="doc_data">
                  <h5>Name</h5>
                  <p>Department</p>
                </div>
              </td>
              <td>
                <p>14 Nov, 2019</p>
                <p>10 : 10 am</p>
              </td>
              <td>
                <p>12 Nov, 2019</p>
              </td>
              <td>$160</td>
              <td className="text-success">Confirm</td>
              <td>
                <Link to="/doctors/3" className="btn btn-single">
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/img/08.jpg" alt="" />
                <div className="doc_data">
                  <h5>Name</h5>
                  <p>Department</p>
                </div>
              </td>
              <td>
                <p>14 Nov, 2019</p>
                <p>10 : 10 am</p>
              </td>
              <td>
                <p>12 Nov, 2019</p>
              </td>
              <td>$160</td>
              <td className="text-success">Confirm</td>
              <td>
                <Link to="/doctors/4" className="btn btn-single">
                  View
                </Link>
              </td>
            </tr>
            {appointments.length > 0 &&
              appointments.map((appointment) => (
                <tr>
                  <td>
                    <img
                      src={`${
                        this.getDoctor(doctors, appointment.doctorId).img
                      }`}
                      alt=""
                    />
                    <div className="doc_data">
                      <h5>
                        {this.getDoctor(doctors, appointment.doctorId).name}
                      </h5>
                      <p>
                        {
                          this.getDoctor(doctors, appointment.doctorId)
                            .department
                        }
                      </p>
                    </div>
                  </td>
                  <td>
                    <p>{appointment.bookingDate}</p>
                    <p>10 : 10 am</p>
                  </td>
                  <td>
                    <p>{appointment.creationDate}</p>
                  </td>
                  <td>$160</td>
                  <td className="text-warning">Pending</td>
                  <td>
                    <Link
                      to={`/doctors/${
                        this.getDoctor(doctors, appointment.doctorId)._id
                      }`}
                      className="btn btn-single"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProfileTable;
