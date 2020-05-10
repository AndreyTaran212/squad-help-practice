import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {Link} from 'react-router-dom';
import style from './HowItWorksPage.module.sass';
import {animateScroll as scroll} from 'react-scroll';
import classNames from 'classnames';
import WistiaEmbed from '../../components/WistiaEmbed/WistiaEmbed';
import {Icon} from '@iconify/react';
import emailOutline from '@iconify/icons-mdi/email-outline';


class HowItWorksPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        };

    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 30;
            if (isTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false})
            }
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {

        return (
            <div>
                <Header/>
                <section>
                    <div className={style.container}>
                        <div className={style.row}>
                            <div className={style.header}>
                                <div className={style.videoWrapper}>
                                    <WistiaEmbed hashedId="vfxvect60o"/>
                                </div>
                                <div className={style.headerTextWrapper}>
                                    <h2>How Does Squadhelp Work?</h2>
                                    <p>Squadhelp allows you to host branding competitions to engage with the most
                                        creative
                                        people across the globe and get high-quality results, fast. Thousands of
                                        creatives
                                        compete with each other, suggesting great name ideas. At the end of the
                                        collaborative contest, you select one winner. The winner gets paid, and you get
                                        a
                                        strong brand name that will help you succeed! It's quick, simple, and costs a
                                        fraction of an agency.</p>
                                </div>
                            </div>
                            <div className={style.stepsContainer}>
                                <h2>5 Simple Steps</h2>
                                <div className={style.mainStepContainer}>
                                    <div className={style.stepsTextWrapper}>
                                        <div className={classNames(style.stepsCircle, style.firstCircle)}>1</div>
                                        <h4>Start Your Contest</h4>
                                        <p>Complete our fast, easy project brief template, and we’ll share it with our
                                            community of more than 70,000 Creatives.</p>
                                    </div>
                                    <div className={style.stepsTextWrapper}>
                                        <div className={style.stepsCircle}>2</div>
                                        <h4>Ideas Start Pouring In</h4>
                                        <p>You will start receiving name ideas - created specifically for you - within
                                            minutes. Dozens of contestants work for you at the same time! A typical
                                            naming
                                            contest receives several hundred name ideas. All ideas are automatically
                                            checked
                                            for URL availability.</p>
                                    </div>
                                    <div className={style.stepsTextWrapper}>
                                        <div className={style.stepsCircle}>3</div>
                                        <h4>Collaborate and Communicate</h4>
                                        <p>See all your submissions from your contest dashboard. Rate entries, leave
                                            private
                                            comments, and send public messages, leading the process towards the perfect
                                            name.</p>
                                    </div>
                                    <div className={style.stepsTextWrapper}>
                                        <div className={style.stepsCircle}>4</div>
                                        <h4>Validate</h4>
                                        <p>Choose your name with confidence. Our unique validation process includes
                                            domain
                                            checks, trademark risk assessment, linguistics analysis, and professional
                                            audience testing.</p>
                                    </div>
                                    <div className={style.stepsTextWrapper}>
                                        <div className={style.stepsCircle}>5</div>
                                        <h4>Pick your winner!</h4>
                                        <p>Once your contest ends, announce the winner - and register the name. Come
                                            back to
                                            Squadhelp to launch a Logo Design or Tagline project for your name.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contestBarWrapper}>
                                <div className={style.contestBar}>
                                    <Link to='/startContest' className={style.contestLink}
                                          style={{textDecoration: 'none'}}><span>START A CONTEST</span></Link>
                                </div>
                            </div>
                            <div className={style.howItWorkContainer}>
                                <div className={style.generalQuestion}>
                                    <div className={style.generalQuestionIcon}>?</div>
                                    <div className={style.generalQuestionText}>
                                        <h5>Frequently Asked Questions</h5>
                                    </div>
                                </div>
                                <div className={style.questionWrapper}>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Why should I use Squadhelp?</h4>
                                        <p>You always have an option of hiring a consultant or coming up with the name
                                            yourself. However, Squadhelp builds great brands that succeed faster by
                                            connecting you with the most creative people across the globe. Most
                                            importantly,
                                            Squadhelp provides you with choice: you get to see ideas from dozens (in
                                            some
                                            cases, hundreds) of contestants before you select a winner. Typically, you
                                            would
                                            spend far less money with Squadhelp (our contests start at $199) than hiring
                                            an
                                            agency. Also, you will receive immediate results - most contests begin
                                            receiving
                                            submissions within minutes of starting.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>How is Squadhelp Different?</h4>
                                        <p>Since 2011, we have been committed to disrupting the traditional agency
                                            model.
                                            Our platform offers much more than a typical crowdsourcing experience. From
                                            Machine Learning to Audience Testing to Comprehensive Trademark Validation,
                                            you
                                            receive best-in-class support for your branding projects.
                                        </p>
                                        <p><strong>Breadth:</strong> Our Contest-Based Crowdsourcing approach allows you
                                            to
                                            receive an unmatched breadth of name ideas from dozens of unique, creative
                                            minds
                                            while working with the world's largest branding community.
                                        </p>
                                        <p><strong>Quality and Collaboration:</strong> Using an advanced Quality Scoring
                                            Algorithm, we ensure that you receive more ideas from our top-quality
                                            creatives,
                                            and we use Gamification best practices to encourage high-quality
                                            brainstorming
                                            and two-way communication throughout your contest.
                                        </p>
                                        <p><strong>We don’t stop at ideation:</strong> Choose your name with confidence
                                            through our high-end validation services. Poll your target demographics to
                                            get
                                            unbiased feedback on your favorite names, and receive Trademark Risk and
                                            Linguistics Analysis Reports developed by a Licensed Trademark Attorney.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Will you help me validate my name?</h4>
                                        <p>Yes! We believe that validating and securing your name is a critical part of
                                            your
                                            branding process. Squadhelp offers domain checks, <a
                                                href="https://helpdesk.squadhelp.com/squadhelp-features/squadhelp-trademark-support">Trademark
                                                support</a>, linguistics analysis, and <a
                                                href="https://www.squadhelp.com/brand-name-testing">professional
                                                audience
                                                testing</a> to help you choose your name with confidence. We even have
                                            special prices for Trademark filing for our customers.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>I’ve never used Squadhelp before. What should I expect? </h4>
                                        <p>Most customers tell us that Squadhelp’s process is effective, easy, fast, and
                                            even fun. We constantly hear <a href="/testimonials-feedback">extremely
                                                positive
                                                feedback</a> with respect to the breadth of ideas submitted to each
                                            contest,
                                            and many customers are surprised at how insightful working with dozens of
                                            creative individuals from across the globe can be.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>What kind of work can I crowdsource?</h4>
                                        <p>You can host competitions for Naming, Taglines, Logos, Business cards,
                                            Package
                                            design, other design projects, and even Product feedback and research.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>What if I don't like anyone's work?</h4>
                                        <p>Our creatives work extremely hard to ensure a successful outcome for all
                                            projects. If you do not like any of the submissions, we can add more days to
                                            your contest at no extra cost. In addition, our Gold and Platinum Packages
                                            come
                                            with a partial refund option. If you do not like the quality of submissions,
                                            you
                                            can request a refund for the contest award fees (if you keep your contest
                                            award
                                            as "Not Guaranteed"). We also offer complimentary branding consultation to
                                            ensure you get the best outcome from your contest. Read more about our <a
                                                href="https://helpdesk.squadhelp.com/important-sh-policies/refund-policy">Refund
                                                policy</a>.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Can I see any examples?</h4>
                                        <p>Our creatives have submitted more than 5 Million names and thousands of logos
                                            on
                                            our platform. Here are some examples of Names, Taglines, and Logos that were
                                            submitted in recent contests.
                                        </p>
                                        <ul>
                                            <li> - <a href="/Name-Ideas">Name Examples</a></li>
                                            <li> - <a href="/tagline-slogan-ideas">Tagline Examples</a></li>
                                            <li> - <a href="/logo-design-examples">Logo Examples</a></li>
                                        </ul>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Where can I read about feedback from other customers?</h4>
                                        <p>Thousands of customers have used Squadhelp to find great Names, Taglines and
                                            Logos for their businesses. Here are some of the <a
                                                href="/testimonials-feedback">recent customer testimonials</a>.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Who should use Squadhelp?</h4>
                                        <p>Our disruptive approach to naming and branding has been used successfully by
                                            just
                                            about every type of venture imaginable. Startups and small businesses love
                                            our
                                            affordable pricing, SM&B gravitate towards our end-to-end service, and large
                                            international businesses are particularly excited by the breadth of ideas
                                            and
                                            the rapid results. We have also worked with nonprofits, municipalities,
                                            associations, event planners, agencies, and more.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Who will be working on my contest?</h4>
                                        <p>We are an open platform built on the core belief that anyone can have a great
                                            idea. However, we’ve invested heavily to ensure that the best Creatives on
                                            our
                                            site participate the most in your contest. Our Quality Scoring algorithm and
                                            Gamification best practices ensure high-quality submission and superior
                                            collaboration.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>How much does it cost?</h4>
                                        <p>Our naming competitions start at $199, and our logo design competitions start
                                            at
                                            $299.
                                            Also, there are three additional contest level that each offer more features
                                            and
                                            benefits. See our <a href="/squadhelp-pricing">Pricing Page</a> for
                                            details.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Can you serve customers outside the US?</h4>
                                        <p>Absolutely. Squadhelp services organizations across the globe. Our customer
                                            come
                                            from many countries, such as the United States, Australia, Canada, Europe,
                                            India, and MENA. We’ve helped more than 25,000 customer around the world.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>What if I want to keep my business idea private?</h4>
                                        <p>You can select a Non Disclosure Agreement (NDA) option at the time of
                                            launching
                                            your competition. This will ensure that only those contestants who agree to
                                            the
                                            NDA will be able to read your project brief and participate in the contest.
                                            The
                                            contest details will be kept private from other users, as well as search
                                            engines.
                                        </p>
                                    </div>
                                    <div className={style.questionTextWrapper}>
                                        <h4>Can you serve customers outside the US?</h4>
                                        <p>Absolutely. Squadhelp services organizations across the globe. Our customer
                                            come
                                            from many countries, such as the United States, Australia, Canada, Europe,
                                            India, and MENA. We’ve helped more than 25,000 customer around the world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.getItTouch}>
                    <div className={style.getItTouchContainer}>
                        <div className={style.getItTouchWrapper}>
                            <div className={style.getItTouchIcon}>
                                <div>
                                    <Icon icon={emailOutline} className={style.iconTouch}/>
                                </div>
                            </div>
                            <div className={style.getItTouchText}>
                                <h1>Questions?</h1>
                                <p>Check out our <a href="http://help.squadhelp.com">FAQs </a>
                                    or send us a <a href="#">message</a>.
                                    For assistance with launching a contest, you can also call us at (877)&nbsp;355-3585
                                    or
                                    schedule a <a href="#"> Branding Consultation</a>
                                </p>
                            </div>
                        </div>
                        <div className={style.getItTouchButton}>
                            <div>GET IN TOUCH</div>
                        </div>
                    </div>
                    <a onClick={this.scrollToTop}
                       className={classNames(style.icon, {[style.iconScroll]: !this.state.scrolled})}>
                        <i className={'fa'}></i>
                    </a>
                </section>
                <Footer/>
            </div>
        );
    };
};

export default HowItWorksPage;