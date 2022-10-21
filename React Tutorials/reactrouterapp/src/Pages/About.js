import { useNavigate } from 'react-router-dom'


const About = () => {
  const navigate = useNavigate()
  const gotoContact = () => {
    navigate("/contact")
  }
  return (
    <>
      <h1>About Page</h1>
      <button onClick={gotoContact}>Go To Contact</button>
      <button onClick={() => navigate(-1)}>Go To Back</button>
    </>
  )
}

export default About