@extends('admin.master')
@section('title', 'Settings')

@section('content')
    <div class="container mt-4">
        <h2 class="text-primary"><i class="fa fa-cog"></i> Website Settings</h2>

        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="fa fa-check-circle"></i> {{ session('success') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif

        <div class="card shadow p-4">
            <form action="{{ route('settings.update') }}" method="POST">
                @csrf

                <div class="row">
                    <div class="col-md-6">
                        <!-- Website Name -->
                        <div class="mb-3">
                            <label class="form-label"><i class="fa fa-globe"></i> Website Name</label>
                            <input type="text" class="form-control @error('site_name') is-invalid @enderror"
                                   name="site_name" value="{{ \App\Models\Setting::get('site_name') }}"
                                   placeholder="Enter website name">
                            @error('site_name')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                    </div>

                    <div class="col-md-6">
                        <!-- Email -->
                        <div class="mb-3">
                            <label class="form-label"><i class="fa fa-envelope"></i> Email</label>
                            <input type="email" class="form-control @error('site_email') is-invalid @enderror"
                                   name="site_email" value="{{ \App\Models\Setting::get('site_email') }}"
                                   placeholder="Enter website email">
                            @error('site_email')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                    </div>

                    <div class="col-md-6">
                        <!-- Facebook -->
                        <div class="mb-3">
                            <label class="form-label"><i class="fa fa-facebook"></i> Facebook</label>
                            <input type="text" class="form-control @error('facebook') is-invalid @enderror"
                                   name="facebook" value="{{ \App\Models\Setting::get('facebook') }}"
                                   placeholder="Enter Facebook link">
                            @error('facebook')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary mt-3">
                    <i class="fa fa-save"></i> حفظ التغييرات
                </button>
            </form>
        </div>
    </div>
@endsection