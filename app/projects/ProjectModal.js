export default function ProjectModal({ visible, onClose }) {
const  handleOnClose = (e) => {
    if(e.target.id === 'modalContainer') onClose();
    };

  if (!visible) return null;

  return (
    <>
      <div id='modalContainer' onClick={handleOnClose} className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-4 rounded text-black">My Modal</div>
      </div>
    </>
  );
}
