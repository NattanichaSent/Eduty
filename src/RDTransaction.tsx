import React from "react";
import Navbar from "./components/Navbar";
import "./RDTransaction.css";

export default function RDTransaction() {
  return (
    <div>
      <meta name="viewport" content="width=1920px, initial-scale=1.0"></meta>
      <Navbar></Navbar>
      <div className="space2">
        <div className="title spaceTitle">
          <div className="line"></div>
          <div>Data Result Correction</div>
        </div>

        <div className="SearchBar shadow  row btw spaceTitle">
          <div className="FilterButon">
            <button className="BatchDate button1">
              <div className="row ">
                <div className="space">Batch Date</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7F7F7F"
                    d="M8 14q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm4 0q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm4 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Z"
                  />
                </svg>
              </div>
              <div className="line2"></div>
            </button>

            <button className="LotName button1">
              <div className="row ">
                <div className="space">Lot Name</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    d="M8 14q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm4 0q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm4 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Z"
                  />
                </svg>
              </div>
              <div className="line2"></div>
            </button>
          </div>

          <button className="SearchButton">
            <div className="row ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="8.5" cy="8.5" r="5" />
                  <path d="M17.571 17.5L12 12" />
                </g>
              </svg>
              <div className="space5">Search</div>
            </div>
          </button>
        </div>

        <div className="Transection">
          <div className="BatchBar shadow ">
            <div className="space3 ">
              <div className="Filter spaceTitle2">
                <button className="button button:hover black">All</button>
                <button className="button2 button2:hover black">
                  <p className="row ">
                    Success
                    <p className="green">8</p>
                  </p>
                </button>

                <button className="button2 button2:hover black">
                  <p className="row">
                    Fail
                    <p className="red">2</p>
                  </p>
                </button>
              </div>

              <div className="Batch  shadow row space4 ">
                <p className="tab">Batch Date : 31/10/2022</p>
                <div className="tab line3"></div>
                <p className="tab">Batch Time : 12:11</p>
              </div>

              <div className="Table top">
                <table>
                  <tr>
                    <th>No.</th>
                    <th>Lot Name</th>
                    <th>Batch Date</th>
                    <th>Batch Time</th>
                    <th>Send RD Date</th>
                    <th>Send RD Status</th>
                    <th>Total Duty</th>
                    <th>TotalDubDutyAmount</th>
                    <th>Total Payment</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>lot_14</td>
                    <td>31/10/2022</td>
                    <td>12:00</td>
                    <td>31/10/2022 15:00</td>
                    <td>
                      <p className="red1">Fail (4)</p>
                    </td>
                    <td>2,000</td>
                    <td>0</td>
                    <td>2,000</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#535353"
                          d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216s216-96.7 216-216s-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8l-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>lot_13</td>
                    <td>31/10/2022</td>
                    <td>12:00</td>
                    <td>31/10/2022 15:00</td>
                    <td>
                      <p className="green1">Success</p>
                    </td>
                    <td>2,000</td>
                    <td>0</td>
                    <td>2,000</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#535353"
                          d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216s216-96.7 216-216s-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8l-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>lot_12</td>
                    <td>31/10/2022</td>
                    <td>12:00</td>
                    <td>31/10/2022 15:00</td>
                    <td>
                      <p className="red1">Fail (9)</p>
                    </td>
                    <td>2,000</td>
                    <td>0</td>
                    <td>2,000</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#535353"
                          d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216s216-96.7 216-216s-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8l-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="ltb">Total</td>
                    <td className="ltb"></td>
                    <td className="ltb"></td>
                    <td className="ltb"></td>
                    <td className="ltb"></td>
                    <td className="ltb"></td>
                    <td className="ltb">6,000</td>
                    <td className="ltb">0</td>
                    <td className="ltb">6,000</td>
                    <td className="ltb"></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
