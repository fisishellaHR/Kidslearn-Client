/* eslint-disable react/prop-types */
export const FeedBack = ({ feedback }) => {
  return (
    <div className="overflow-auto bg-primary shadow-md rounded-lg p-6">
      <table className="min-w-full divide-y divide-primary">
        <thead className="bg-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
              User
            </th>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider">
              Masukan
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary divide-y divide-primary">
          {feedback.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-base  text-white border-r border-primary">
                {item.user}
              </td>
              <td className="px-6 py-4 whitespace-normal text-sm text-white">
                {item.masukan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
