rm -fr test.log

for test in `find ./test -name "*.js"`; do
    if [ $test != "./test/testUtils.js" ]; then
        echo Running $test... | tee -a test.log
        tape $test | tee -a test.log
    fi
done