const Table = () => {
  return (
    <table>
      <thead>
        <tr className="border-4 border-red-500">
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
