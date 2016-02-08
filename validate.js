.directive('validate', ['$timeout', function ($timeout) {
            return {
                require: 'ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    elem.on('change paste keyup blur forceCheck', function (evt) {
                        $timeout(function() {
                            scope.$apply(function () {

                                var parent = elem.closest('.form-group');
                                if (!parent.length) parent = elem.closest('.input-group');

                                setTimeout(function() {
                                    if ( ctrl.$valid ) parent.removeClass('has-error');
                                    else {
                                        //console.warn('INVALID FIELD:', ctrl);
                                        parent.addClass('has-error');
                                    }
                                },500);
                            });
                        }, 0);
                    })
                }
            };
        }])
