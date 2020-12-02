import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [formErrors, setFormErrors] = useState({name: '', email: '', subject: '', message: ''})
  const [activeSubmit, setActiveSubmit] = useState(true)

  const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  const outerClasses = classNames(
    'section reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  const sectionHeader = {
    title: 'Contact Us',
    paragraph: 'If you have any questions or queries, please fill out the form below and we will be in touch soon.'
  };

  const validateForm = () => {
    let formErrors = {name: '', email: '', subject: '', message: ''}
    if (!name) formErrors.name = '* Name is requried'
    if (!emailRegex.test(email)) formErrors.email = '* Valid email is requried'
    if (!subject) formErrors.subject = '* Subject is requried'
    if (!message) formErrors.message = '* Message is requried'
    setFormErrors(formErrors)
    if (!name || !emailRegex.test(email) || !subject || !message) return false
    else return true
  }

  const submitForm = e => {
    e.preventDefault()
    setActiveSubmit(false)

    if(validateForm()) {

      let templateParams = {
        name,
        email,
        subject,
        message
      }

      emailjs.send(
        'service_xp7n6jj',
        'template_f0lojv8',
        templateParams,
        'user_y7pjH0OAxRAgkee2Sz2gQ'
      )
      .then(res => {
        toast.success('Message sent!', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false
        });
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setActiveSubmit(true)
      })
      .catch(err => {
        toast.error('Failed to send.', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false
        });
        setActiveSubmit(true)
      })

    } else {
      setActiveSubmit(true)
    }
  }

  return (
    <>
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <SectionHeader data={sectionHeader} className="center-content" />
            <form>
              <fieldset className="container-xs">
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="mb-16"
                  id="form-name"
                  type="text"
                  label="Your name"
                  status="error"
                  hint={formErrors.name}
                />
                <Input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mb-16"
                  id="form-email"
                  type="text"
                  label="Your email"
                  status="error"
                  hint={formErrors.email}
                />
                <Input
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="mb-16"
                  id="form-subject"
                  type="text"
                  label="Subject"
                  status="error"
                  hint={formErrors.subject}
                />
                <Input
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="mb-16"
                  id="form-message"
                  type="textarea"
                  label="Message"
                  status="error"
                  hint={formErrors.message}
                />
                <div className="m-auto mt-32 center-content">
                  <Button
                    tag="input"
                    type="button"
                    value="Send"
                    color="primary"
                    wideMobile
                    onClick={e => submitForm(e)}
                    disabled={activeSubmit ? false : true}
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
