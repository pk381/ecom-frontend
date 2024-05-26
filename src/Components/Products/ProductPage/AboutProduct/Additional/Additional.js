import styles from "./Additional.module.css";

function Additional() {
  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <td>FIT</td>
            <td>SLIM-FIT</td>
          </tr>
          <tr>
            <td>WASH</td>
            <td>MACHINE WASH</td>
          </tr>
          <tr>
            <td>MATERIAL</td>
            <td>60% COTTON, 40% POLYESTER</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Additional;
