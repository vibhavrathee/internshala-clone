import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './fresher.css'
export default function Freshers() {
    return (
        <div>
            <div className="Cards">
                <div className="Card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/jobs/perks/ctc.svg"/>
                    </div>
                    <div className="text">Minimum CTC of 3 LPA</div>
                </div>
                <div className="Card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/engineering.svg"/>
                    </div>
                    <div className="text">Dream Companies</div>
                </div>
                <div className="Card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/jobs/perks/verified.svg"/>
                    </div>
                    <div className="text">100% verified jobs</div>
                </div>
            </div>
        </div>
    )
}
