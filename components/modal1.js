import React from 'react';
import "../styles/modal1.module.css";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export const Modal1 = props => {
    const [name, setName] = React.useState("");
    const [code, setCode] = React.useState("");
    const [business, setBusiness] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [finalPhone, setFinalPhone] = React.useState("")
    const [showModal, setShowModal] = React.useState(true);

    return (
        <React.Fragment>
            <section style={{width:'100vw', height:'100vh', display: showModal ? "flex" : "none",
            justifyContent:'center', alignItems:'center', backgroundColor:'rgba(255,255,255,0.8)', 
            position:'fixed', zIndex:100, top:0, left:0}}>
                <div style={{position:'fixed', top:50, right:50, zIndex:100, width:40, height:40}} onClick={() => setShowModal(!showModal)}>
                    <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png' style={{width:'100%'}}/>
                </div>
                <form style={{width:'450px', height:'650px', position:'relative', borderRadius:16, overflow:'hidden', backgroundColor:'white', boxShadow:'3px 3px 24px rgba(0,0,0,0.1)'}}>
                    <section style={{width:'100%', height:'13%', padding:'30px 40px 20px 40px', display:'flex', flexDirection:'column', justifyContent:'center', background:'linear-gradient(to right, #201F21, #303030)'}}>
                            <img className='MM' style={{width:'40%', marginBottom:10}} src='../dist/images/logo.png'/>
                    </section>
                    <div style={{padding:'20px 40px 0px 40px', width:'100%', backgroundColor:'#F6F5F7', borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                        <p style={{color:'rgba(0,0,0,0.7)', fontSize:'16px', lineHeight:1.2}}>Please fill the following form to allow us to contact you in order to discuss about your social media marketing grow and improvement!</p>
                    </div>
                    <div style={{padding:'30px 40px 0px 40px', width:'100%'}}>
                    <TextField required id="outlined-basic1" value={name} onChange={ev => setName(ev.target.value)} label="Provide us your name" autoFocus variant="outlined" fullWidth style={{marginBottom:18}} InputLabelProps={{style:{color:'blue'}}}/>
                    <TextField required id="outlined-basic2" value={business} onChange={ev => setBusiness(ev.target.value)} label="What's your business' name?" variant="outlined" fullWidth style={{marginBottom:18}} InputLabelProps={{style:{color:'blue'}}}/>
                    <div style={{display:'flex'}}>
                        <FormControl required style={{flex:1.2, marginRight:10}}>
                            <InputLabel id="demo-simple-select-label" style={{color:'blue'}}>Code</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={code}
                                label="Code"
                                onChange={ev => setCode(ev.target.value)}
                            >
                            <MenuItem value="select">Select</MenuItem>
                            <MenuItem value="+1">+1</MenuItem>
                            <MenuItem value="+44">+44</MenuItem>
                            <MenuItem value="+593">+593</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField required id="outlined-basic3" value={phone} onChange={ev => {setPhone(ev.target.value); setFinalPhone(code + phone)}} label="Phone number" variant="outlined" fullWidth style={{marginBottom:18, flex:3}} InputLabelProps={{style:{color:'blue'}}}/>
                    </div>
                    <TextField onChange={ev => setEmail(ev.target.value)} value={email} required id="outlined-basic4" label="What about your e-mail" variant="outlined" fullWidth style={{marginBottom:10}} InputLabelProps={{style:{color:'blue'}}}/>
                    </div>
                    <div style={{padding:'20px 40px 0px 40px', width:'100%'}}>
                    <Button onClick={() => alert(finalPhone.split(" ").join(""))} style={{background:"linear-gradient(to bottom, #720FF2, #4C00C4)", fontSize:17, height:60}} variant="contained" fullWidth>Submit Form</Button>
                    </div>
                    <div style={{width:'100%', height:3, background:'rgba(0,0,0,0.1)', position:'absolute', bottom:0}}></div>
                </form>
            </section>
        </React.Fragment>
    );
}