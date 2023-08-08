import React from "react";

function WarningAlert({ msg, actions }) {
  return (
    <dialog id="modal_warning" className="modal">
      <div className="modal-box text-left">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">แจ้งเตือน !!</h3>
          <p className="py-4">{msg}</p>
        </form>
        <div className="w-full text-right">
          <button className="btn btn-sm btn-primary" onClick={() => actions()}>
            ตกลง
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
}

export default WarningAlert;
