import {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom";
import "./StudentDetail.css";
interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function StudentDetail() {
  const {id} = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Student>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Đang tải chi tiết...</p>;
  if (!student) return <p>Không tìm thấy sinh viên.</p>;

  return (
  <div className="student-detail-container">
    <h2>Chi tiết sinh viên</h2>
    <div className="student-info">
      <p><span>Tên:</span> {student.name}</p>
      <p><span>Email:</span> {student.email}</p>
      <p><span>Điện thoại:</span> {student.phone}</p>
      <p><span>Website:</span> {student.website}</p>
    </div>
    <Link to="/bai2" className="back-link">
      ← Quay lại danh sách
    </Link>
  </div>
);
}
