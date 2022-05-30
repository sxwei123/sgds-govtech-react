import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@govtechsg/sgds-govtech/sgds/sgds.css';
import {
  FileUploadCom,
  MastheadCom,
  TooltipCom,
  NavbarCom,
  StepperCom,
  AccordionCom,
  AlertCom,
  BadgeCom,
  BreadcrumbCom,
  CardCom,
  QtyToggleCom,
  SelectableCardCom,
  DropdownCom,
  ValidationCom,
  InputGroupCom,
  TableCom,
  ToastCom,
  PaginationCom,
  SideNavCom,
  ProgressBarCom,
  DatePickerCom,
  TypeaheadCom,
  ModalCom,
  TabsCom
} from './components';

function App() {
  return (
    <div className="container">
      <MastheadCom />
      <FileUploadCom />
      <TooltipCom />
      <NavbarCom />
      <StepperCom />
      <AccordionCom />
      <AlertCom />
      <BadgeCom/>
      <BreadcrumbCom/>
      <CardCom/>
      <QtyToggleCom/>
      <SelectableCardCom/>
      <DropdownCom/>
      <ValidationCom/>
      <InputGroupCom/>
      <TableCom/>
      <ToastCom/> 
      <PaginationCom/>
      <SideNavCom/>
      <ProgressBarCom/> 
      <DatePickerCom/>
      <TypeaheadCom/>
      <ModalCom/>
      <TabsCom/>
    </div>
  );
}

export default App;
