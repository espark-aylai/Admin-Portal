import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayDetail from "../../components/DisplayDetails";
import { editBlog } from "./blogSlice";

const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const singlePost = data?.filter((item) => item?.id == id);
  console.log(singlePost);

  const [isEditable, setIsEditable] = useState(false);
  const [editedFields, setEditedFields] = useState({
    title: singlePost[0]?.title || "",
    content: singlePost[0]?.content || "",
    excerpt: singlePost[0]?.excerpt || "",
  });

  function handleEditChange() {
    dispatch(
      editBlog({
        id: singlePost[0]?.id,
        title: editedFields.title,
        content: editedFields.content,
        excerpt: editedFields.excerpt,
      })
    );
    setIsEditable(false);
  }

  const handleInputChange = (event, fieldName) => {
    if (fieldName) {
      setEditedFields({
        ...editedFields,
        [fieldName]: event,
      });
    } else {
      const { name, value } = event.target;
      setEditedFields({
        ...editedFields,
        [name]: value,
      });
    }
  };

  return (
    <DisplayDetail
      id={id}
      data={data}
      editAction={editBlog}
      titleField="title"
      contentField="content"
      excerptField="excerpt"
    />
  );
};

export default BlogDetail;
