import CatalogCSS from './Catalog.module.css';

const Catalog = () => {
    return (
        <>
            <div className={CatalogCSS.catalog_sub_header}>
                <h1>Catalog</h1>
                <form action="">
                    <label htmlFor="">Title</label>
                    <input type="text" />

                    <label htmlFor="">Author</label>
                    <input type="text" />
                </form>
            </div>
            <div className={CatalogCSS.catalog_table}>
                <table className={CatalogCSS.table}>
                    <tr>
                        <th>ISBN13</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Availability</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Catalog;