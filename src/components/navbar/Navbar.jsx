import { Menu, Select } from "antd"

function Navbar() {
    const { Option } = Select
    const handleCountryChange = (value) => {

    }
    return (
        <div>
            <Menu
                mode="horizontal"
                items={[
                    {
                        label: "Home",
                        key: "Home"
                    },
                    {
                        label: "AllNews",
                        key: "AllNews",
                    },
                    {
                        label: <Select
                            style={{ width: 200 }}
                            onChange={handleCountryChange}
                            placeholder="change country"
                        >
                            <Option value="us">United States</Option>
                            <Option value="gb">United Kingdom</Option>
                            <Option value="ca">Canada</Option>
                            {/* Add more country options as needed */}
                        </Select>
                    }
                ]} />
        </div>
    )
}
export default Navbar