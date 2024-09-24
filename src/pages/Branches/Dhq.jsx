import React from 'react'

export default function Dhq() {
  return (
    <div className="overflow-x-auto">
        <div className="w-full p-2 bg-blue-900 flex gap-9">
            <img
                alt="example"
                src="https://th.bing.com/th/id/OIP.yeC-UG9Q5yquQwuJJmJvjAHaHa?rs=1&pid=ImgDetMain"
                className="h-14 mr-52"
            />

            <h1 className="ml-48 font-bold text-2xl">Visitors</h1>
        </div>
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>
                        <label>
                            Status
                        </label>
                    </th>
                    <th>Name</th>
                    <th>Office</th>
                    <th>Code</th>
                    <th>Personnel Escourt</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                        <label>
                            Waiting
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Director ICT
                        <br />
                        <span className="badge badge-ghost badge-sm">
                            Information communicatiion technology
                        </span>
                    </td>
                    <td>P12G45 </td>
                    <td>John Doe </td>
                </tr>
                {/* row 2 */}
            </tbody>

            {/* foot */}
            {/* <tfoot>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Job</th>
    <th>Favorite Color</th>
    <th></th>
  </tr>
</tfoot> */}
        </table>
        <button className="btn btn-ghost btn-xs mx-auto w-40">
            Register Visitor
        </button>
    </div>
);
}
