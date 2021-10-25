import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div className="newsletter">
        <div>
            <div className="text-center">
              <h2>Newsletter</h2>
              <p>Receiving Update news in your Email and dont miss it</p>
            </div>
            <div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row m-0'>
                  <div className='col-md-12'>
                    <div className='form-group d-flex'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control subscribe-input'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                      <button type='submit' className='main-button text-white bg-main-color' style={{fontSize:'16px'}}>
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
                <div id='success'></div>
              </form>
            </div>
        </div>
      </div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-6 col-12'>
            <div className='row'>
              <div className='section-title'>
                <img src="img/logo.png" />
                <p style={{paddingRight: '50px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tristique placerat eleifend aliquam pellentesque facilisis ultrices. Imperdiet mus urna egestas at tellus. 
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className="row">
              <div className='col-md-6 col-6 contact-info'>
                <div className='contact-item'>
                  <h3>Menu</h3>
                  <a href="#" className="text-white">Start</a>
                  <a href="#island" className="text-white">The Island</a>
                  <a href="#nfts" className="text-white">Marketplace</a>
                  <a href="#roadmap" className="text-white">Roadmap</a>
                </div>
              </div>
              <div className='col-md-6 col-6 contact-info'>
                <div className='contact-item'>
                  <h3>Know More</h3>
                  <a href="#" className="text-white">Privacy Policy</a>
                  <a href="#" className="text-white">Service Terms</a>
                  <a href="#" className="text-white">Whitepaper</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
