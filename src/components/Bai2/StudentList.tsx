import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./StudentList.css";
interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Student[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải danh sách sinh viên...</p>;

 return (
  <div className="student-container">
    <h2>Danh sách sinh viên</h2>
    <ul className="student-list">
      {students.map((st) => (
        <li key={st.id} className="student-item">
          <Link to={`/bai2/${st.id}`}>{st.name}</Link>
          <span className="student-email">{st.email}</span>
        </li>
      ))}
    </ul>
  </div>
);
}
