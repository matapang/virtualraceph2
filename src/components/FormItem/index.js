import { Form } from 'antd';
import styled from 'styled-components';
const FormItem = Form.Item;


export default styled(FormItem)`
    .ant-form-item-label 
        label {
            color: grey !important;            
            font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
    }
`;