import heroImg from './assets/undraw_online_reading_np7n.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Welcome!</h1>
          <p>Welcome to Sawdust Therapy Woodworking! We're glad you're here!</p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
