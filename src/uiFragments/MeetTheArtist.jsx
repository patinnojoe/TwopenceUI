/* eslint-disable react/prop-types */
import { meetArtistData } from "../data/meetArtistData";

import { divider } from "../assets";
import FlipCard from "./FlipCard";

const MeetTheArtist = () => {
    return (
        <section className="latest_work_container  meetArtist-container mb-3">
            <h1 className="text-center main-header">Meet The Artist</h1>
            <div className="artist-card-flex-container">
                {meetArtistData.map((data, index) => (
                    <div key={index} className="card_main_div">
                        <MeetArtistCard data={data} />
                    </div>
                ))}
            </div>

            <img src={divider} height="80px" width="80px" />
        </section>
    );
};

export default MeetTheArtist;

// export function MeetArtistCard({ data }) {
//     return (
//         <div className="roadmap_card">
//             <img src={data.} alt="" />
//             <p className="fw-bold fnt-30">{data.title}</p>
//             <p className="clr-light fnt-13">{data.description}</p>
//             <hr className="divider_line" />

//             <ul className="list_container">
//                 {data.steps.map((step, index) => (
//                     <li key={index} className="list">
//                         <span>
//                             <IoIosCheckmarkCircleOutline
//                                 style={{
//                                     fill: "#ff00ea",
//                                     width: "20px",
//                                     height: "20px",
//                                 }}
//                             />
//                         </span>
//                         <span className="clr-light fnt-12 mt-1">{step}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

export function MeetArtistCard({ data }) {
    return (
        <FlipCard>
            <div className="latest_work_card">
                <div className="flip-card-front">
                    <img src={data.imgURL} alt="" className="image" />
                    <div className="text_container mt-2">
                        <h5 className="hover_color_purple fnt-14">
                            {data.artistName}
                        </h5>
                        <p className="fnt-13">
                            (
                            <span className="hover_color_purple ">
                                {data.role}
                            </span>
                            )
                        </p>
                    </div>
                </div>

                <div className="flip-card-back">
                    <section className="d-flex flex-column gap-3">
                        <p className="fnt-16 fw-bold">About</p>
                        <hr />

                        <span> {data.experience}</span>
                    </section>
                </div>
            </div>
        </FlipCard>
    );
}
