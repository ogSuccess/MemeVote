var operations = {
    async onCallDataAndFunctionAsync(instance, func, args, opts, types) {
            if (func && args && types) {
                try {
                    const dataRes = await instance.call(func, args, opts);
                    if (types !== '()') {
                        const data = await dataRes.decode(types);
                        console.log(data);
                        return data;
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log('Please enter a Function and 1 or more Arguments.');
            }
        }
};
