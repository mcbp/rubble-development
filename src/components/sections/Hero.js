import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import SmoothScroll from '../elements/SmoothScroll';
import { FaArrowDown } from 'react-icons/fa';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="mb-32">
              <Image
                src={require('./../../assets/images/logo.png')}
                alt="Rubble Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Rubble Development {/*<span className="text-color-primary">startups</span>*/}
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                We are a group of software developers building dodgeball themed applications, services and equipment.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <SmoothScroll to="app-list" >
                  <ButtonGroup>
                    <Button className="m-auto" tag="a" color="primary" wideMobile >
                      View our apps <FaArrowDown style={{marginLeft: '12px'}} />
                    </Button>
                  </ButtonGroup>
                </SmoothScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
