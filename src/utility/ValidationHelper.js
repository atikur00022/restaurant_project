class ValidationHelper{

    static IsEmail(value) {
        let EmailRegx = /\S+@\S+\.\S+/;
        return EmailRegx.test(value);
    }
    static IsNull(value) {
        return value == null;
    }
    static  IsEmpty(value) {
        return value.length === 0;
    }

}
export default ValidationHelper;