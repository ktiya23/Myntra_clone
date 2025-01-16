import { Container, Grid2, } from '@mui/material'
import React from 'react'

const images=[
    {url:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/hpEcrOrm_6a9dac6181ed4930aa2a7e12c5150175.jpg"},
    {url:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/50e3kk1G_e49c76b1d4634c7681c2662fb2fd3095.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/gx4ejH2p_e11304b9b8fe400baa493609fe88e365.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5GPoLjgx_802886f8b9c74273803313b1103a8e16.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/ZBB1zqm6_120b40ac77a04d3db7503b4c6a13dd91.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yg29mbde_9659810f5c6e4b629c60d86afd9fec8a.jpg"},//
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/bIQP9wbr_67b3a95df792456b98bc1ba1237bb779.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/2nVCvWU8_486c820b2db44cf8bdd4678c988cf821.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/iDYvU5BX_4a545298ef67430b8f42bc0566a925d1.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/G0tDeU5X_47e68f1ab94a4289842265de4d1b6e83.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/LlQfGoh3_b449e189dd9b48c6b6ab6a59f36acef0.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/CEcuo6U4_3f4fc4a160c247cfb41e70485f281d54.jpg"},//
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Njb0ABov_45db62506a1b42798513e8b783c7a98b.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/D9G4Kjrz_c1003161fae04485906a37715b01a4cf.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/VfNti6y8_a2e5ae944ecc4736b18efb8a75b1e191.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/uwqXL3Kq_0396ac2e5a1a4c12af1eec55c14917c8.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/CdimVElj_ce97d46d5fe64428a08f51217b9f8b0b.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/9Po69KXA_e28249e405fb478fb556ad7a92ca445e.jpg"},//
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/f1hhXRXb_47fa218587514bf7902594e41d14e9f2.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/hKMNGktP_ad33524adea34688b025f947573673cb.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oa2sAEOX_a55bd8360faa48eeb39ae724b06b86ce.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/5rDi1B23_c892152411964fd09fc7f6efd04c5fa0.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/pfVXrZzB_dc0dcd4b3d774b10ad9df1073077bdcd.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Q3zid8FM_61065ffcdeac466895ae4ed15b708158.jpg"},//
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Om1hvOEr_5f550103a1764cc5ab3e09abdf1acaf5.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/jPv6EcWn_7d8d6ab1e2ae48f9ad27305ed489e368.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Oyv2rmcn_4b883a02a10d43c1adb2a8b2f598324d.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/3Vmva6Mn_d1d1003350df4a33be4218faf45bca1d.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/NLt0jbrr_4842380d08cb4b2a9e1f735fc8af96a6.jpg"},
    {url:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/Zthu96N4_af86499a08294db9acb0ed2248680fa5.jpg"},//
    {url:"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/tXjn3xva_ffd20b0d874a4344829952735ed174a5.jpg"},
    {url:"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/CQljGEhb_651bd02ed5ba4444af2b4e37ab93ec0b.jpg"},
    {url:"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/zGx6jkkw_e735b26722574430846f697fa8c7b717.jpg"},

]

const ShopByCategory = () => {
  return (
    <Container sx={{margin:"0 auto"}}>
        <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/11/fn1avydK_9837e0b576384390acc9607b89ed5bfc.jpg' alt='ShopByCategory' style={{display:"block", height:"auto", margin:"0 auto", width:"100%" }}/>

        <div
        style={{
          display: "flex",
          flexWrap: "wrap", 
          justifyContent: "center",
          margin:0,
          padding:0,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
                flex: "0 0 calc(16.66%)", 
              maxWidth: "16.66%",
            }}
          >
            <img
              src={image.url}
              alt={`Category ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                margin:0,
                padding:0
              }}
            />
          </div>
        ))}
      </div>
      <img src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/4tpZM1rH_ae791a255c4d4ae5a7bf8b9a469b4144.jpg' alt='link' height="auto" width="100%"/>
     </Container>
  )
}

export default ShopByCategory
