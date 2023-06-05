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
                        </div>

                    </div>

                    
                </div>
            </div>
        </div>

    )
}