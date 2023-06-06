import React from "react";
import Navbar from "./components/Navbar";
import "./DataResult.css";

export default function DataResult() {
  return (
    <div>
      
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
              <div className="filter spaceTitle2">
                <button className="button button:hover black active">
                  All
                </button>
                <button className="button button:hover black">
                  <p className="row ">
                    Approved
                    <p className="green">230</p>
                  </p>
                </button>
                <button className="button button:hover black">
                  <p className="row">
                    Pending
                    <p className="yellow">18</p>
                  </p>
                </button>
                <button className="button button:hover black">
                  <p className="row">
                    Invalid Data
                    <p className="red">2</p>
                  </p>
                </button>
                <button className="button button:hover black">
                  <p className="row ">
                    Denied
                    <p className="gray">18</p>
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
                    <th>Total Doc</th>
                    <th>Last Update Date</th>
                    <th>Approval Status</th>
                    <th>Approved By</th>
                    <th>Total Duty</th>
                    <th>TotalDub DutyAmount</th>
                    <th>Total Payment</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>lot_14</td>
                    <td>20</td>
                    <td>31/10/2022</td>
                    <td>
                      <p className="yellow1">Pending</p>
                    </td>
                    <td>-</td>
                    <td>2,000</td>
                    <td>0</td>
                    <td>2,000</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          stroke="#535353"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16v3.5M5 16l1-5m21 5l-1-5M13.5 9h5m-5 4h5m-9 0V5h13v8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>lot_15</td>
                    <td>20</td>
                    <td>31/10/2022</td>
                    <td>
                      <p className="green1">Approved</p>
                    </td>
                    <td>Sompong Karndee</td>
                    <td>2,000</td>
                    <td>0</td>
                    <td>2,000</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          stroke="#535353"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16v3.5M5 16l1-5m21 5l-1-5M13.5 9h5m-5 4h5m-9 0V5h13v8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>lot_16</td>
                    <td>20</td>
                    <td>31/10/2022</td>
                    <td>
                      <p className="gray1">Canceled</p>
                    </td>
                    <td>Panipol Srisuksai</td>
                    <td>2,000</td>
                    <td>0</td>
                    <td>2,000</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          stroke="#535353"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16v3.5M5 16l1-5m21 5l-1-5M13.5 9h5m-5 4h5m-9 0V5h13v8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="ltb">Total</td>
                    <td className="ltb"></td>
                    <td className="ltb">60</td>
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
