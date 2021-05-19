// import React, { useState } from "react";
// import Modal from "@material-tailwind/react/Modal";
// import ModalHeader from "@material-tailwind/react/ModalHeader";
// import ModalBody from "@material-tailwind/react/ModalBody";
// import ModalFooter from "@material-tailwind/react/ModalFooter";
// import Button from "@material-tailwind/react/Button";

// export default function Modal() {
//   const [showModal, setShowModal] = React.useState(false);

//   return (
//     <>     

//       <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
//         <ModalHeader toggler={() => setShowModal(true)}>
//           Modal Title
//         </ModalHeader>
//         <ModalBody className="{this.props.correctMessage}">
//           <p className="text-base leading-relaxed text-gray-600 font-normal">
//             I always felt like I could do anything. That’s the main thing people
//             are controlled by! Thoughts- their perception of themselves! They're
//             slowed down by their perception of themselves. If you're taught you
//             can’t do anything, you won’t do anything. I was taught I could do
//             everything.
//           </p>
//         </ModalBody>
//         <ModalFooter>
//           <Button 
//             color="red"
//             buttonType="link"
//             onClick={(e) => setShowModalCode(false)}
//             ripple="dark"
//           >
//             Close
//           </Button>

//         </ModalFooter>
//       </Modal>
//     </>
//   );
// }