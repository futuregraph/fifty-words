import React, {Component} from 'react'
import {reachMetricaGoal} from './webAnalytics'

class Donation extends Component {

    constructor(props) {
        super(props)
        this.state = {formVisibility: false}
    }

    toggleForm() {
        if (!this.state.formVisibility) reachMetricaGoal('SHOW_DONATION_FORM')
        this.setState({formVisibility: !this.state.formVisibility})
    }

    render() {

        const {formVisibility} = this.state

        return <div className="donation-wrapper">
            <div className="donation-button" onClick={this.toggleForm.bind(this)}>
                👍 Поддержать разработчика
            </div>
            <div className="donation-form" style={{display: formVisibility ? 'block' : 'none'}}>
                <iframe
                    src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5%20%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9&targets-hint=&default-sum=200&button-text=14&payment-type-choice=on&hint=&successURL=https%3A%2F%2Ffuturegraph.github.io%2Ffifty-words%2F&quickpay=shop&account=4100110480715715"
                    width="300" height="224" frameBorder="0" allowTransparency="true" scrolling="no"></iframe>
            </div>
        </div>
    }
}

export default Donation