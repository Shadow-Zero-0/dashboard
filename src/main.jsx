import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Routes, Route } from "react-router";
import Home from './pages/Home';
import Bar from './pages/bar';
import Calendar from './pages/calendar';
import Contacts from './pages/contacts';
import Faq from './pages/faq';
import Form from './pages/form';
import Geography from './pages/geography';
import Invoices from './pages/invoices';
import Line from './pages/line';
import Pie from './pages/pie';
import Team from './pages/team';
import NotFound from './components/NotFound';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route  path="Bar" element={<Bar />} />
    <Route  path="Calendar" element={<Calendar />} />
    <Route  path="Contacts" element={<Contacts />} />
    <Route  path="Faq" element={<Faq />} />
    <Route  path="Form" element={<Form />} />
    <Route  path="Geography" element={<Geography />} />
    <Route  path="Invoices" element={<Invoices />} />
    <Route  path="Line" element={<Line />} />
    <Route  path="Pie" element={<Pie />} />
    <Route  path="Team" element={<Team />} />
    <Route  path="*" element={<NotFound />} />
  

  </Route>
</Routes>
  </BrowserRouter>
  </StrictMode>,
)
