import React from 'react'
import Navbar from './components/Navbar'
import './DataResult.css'



export default function DataResult() {
    return (

        <div >
            <meta name="viewport" content="width=1920px, initial-scale=1.0"></meta>
            {/* <Navbar></Navbar> */}
            <div className='space2'>
                <div className='title spaceTitle'>
                    <div className='line'></div>
                    <div>Data Result Correction</div>
                </div>

                <div className='SearchBar shadow  row btw spaceTitle'>
                    <div className='FilterButon'>
                        <button className='BatchDate button1'>
                            <div className='row '>
                                <div className='space'>Batch Date</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#7F7F7F" d="M8 14q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm4 0q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm4 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Z" /></svg>
                            </div>
                            <div className='line2'></div>
                        </button>

                        <button className='LotName button1'>
                            <div className='row '>
                                <div className='space'>Lot Name</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M8 14q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm4 0q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm4 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Z" /></svg>
                            </div>
                            <div className='line2'></div>
                        </button>
                    </div>

                    <button className='SearchButton'>
                        <div className='row '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8.5" r="5" /><path d="M17.571 17.5L12 12" /></g></svg>
                            <div className='space5'>Search</div>
                        </div>

                    </button>
                </div>

                <div className='Transection'>
                    <div className='BatchBar shadow '>
                        <div className='space3 '>
                            <div className='Filter spaceTitle2'>
                                <button className='button button:hover black'>All</button>
                                <button className='button2 button2:hover black'>
                                    <p className='row '>Approved
                                        <p className='green'>230</p>
                                    </p>
                                </button>
                                <button className='button2 button2:hover black'>
                                    <p className='row'>Pending
                                        <p className='yellow'>18</p>
                                    </p>
                                </button>
                                <button className='button2 button2:hover black'>
                                    <p className='row'>Invalid Data
                                        <p className='red'>2</p>
                                    </p>
                                </button>
                                <button className='button2 button2:hover black'>
                                    <p className='row '>Denied
                                        <p className='gray'>18</p>
                                    </p>
                                </button>
                            </div>

                            <div className='Batch  shadow row space4 '>
                                <p className='tab'>Batch Date : 31/10/2022</p>
                                <div className='tab line3'></div>
                                <p className='tab'>Batch Time : 12:11</p>
                            </div>

                            <div className='Table'>
                                <div className='grid-container row top '>
                                    <div className="grid-item ">No.</div>
                                    <div className="grid-item ">Lot Name</div>
                                    <div className="grid-item ">Total Doc</div>
                                    <div className="grid-item ">Last Update Date</div>
                                    <div className="grid-item ">Approval Status</div>
                                    <div className="grid-item ">Approved By</div>
                                    <div className="grid-item ">Total Duty</div>
                                    <div className="grid-item ">TotalDubDutyAmount</div>
                                    <div className="grid-item ">Total Payment</div>
                                    <div className="grid-item ">Action</div>
                                </div>

                                <div className='1 grid-container row'>
                                    <div className="grid-item ">1</div>
                                    <div className="grid-item">lot_14</div>
                                    <div className="grid-item">20</div>
                                    <div className="grid-item">31/10/2022</div>
                                    <div className="grid-item ">
                                        <p className='yellow1'>Pending</p>
                                    </div>
                                    <div className="grid-item">-</div>
                                    <div className="grid-item">2,000</div>
                                    <div className="grid-item">0</div>
                                    <div className="grid-item">2,000</div>
                                    <div className="grid-item"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 1024 1024"><path fill="#535353" d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216s216-96.7 216-216s-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8l-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg></div>
                                </div>

                                <div className='2 grid-container row'>
                                    <div className="grid-item ">2</div>
                                    <div className="grid-item">lot_15</div>
                                    <div className="grid-item">20</div>
                                    <div className="grid-item">31/10/2022</div>
                                    <div className="grid-item ">
                                        <p className='green1'>Approved</p>
                                    </div>
                                    <div className="grid-item">Sompong Karndee</div>
                                    <div className="grid-item">2,000</div>
                                    <div className="grid-item">0</div>
                                    <div className="grid-item">2,000</div>
                                    <div className="grid-item"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 1024 1024"><path fill="#535353" d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216s216-96.7 216-216s-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8l-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg></div>
                                </div>

                                <div className='3 grid-container row'>
                                    <div className="grid-item ">3</div>
                                    <div className="grid-item">lot_16</div>
                                    <div className="grid-item">20</div>
                                    <div className="grid-item">31/10/2022</div>
                                    <div className="grid-item">
                                        <p className='gray1'>Canceled</p> </div>
                                    <div className="grid-item">Panipol Srisuksai</div>
                                    <div className="grid-item">2,000</div>
                                    <div className="grid-item">0</div>
                                    <div className="grid-item">2,000</div>
                                    <div className="grid-item"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 1024 1024"><path fill="#535353" d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216s216-96.7 216-216s-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8l-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg></div>
                                </div>

                                <div className='total lastgrid-container row'>
                                    <div className="lastgrid-item ">Total</div>
                                    <div className="lastgrid-item"></div>
                                    <div className="lastgrid-item">60</div>
                                    <div className="lastgrid-item"></div>
                                    <div className="lastgrid-item">
                                        <p className=''></p> </div>
                                    <div className="lastgrid-item"></div>
                                    <div className="lastgrid-item">6,000</div>
                                    <div className="lastgrid-item">0</div>
                                    <div className="lastgrid-item">6,000</div>
                                    <div className="lastgrid-item"></div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}