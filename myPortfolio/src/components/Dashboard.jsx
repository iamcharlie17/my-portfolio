import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get("https://portfoilo-server.vercel.app/contacts")
      .then((res) => setContacts(res.data));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{contact?.name}</td>
                <td>{contact?.phone}</td>
                <td>{contact?.email}</td>
                <td>{contact?.subject}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
